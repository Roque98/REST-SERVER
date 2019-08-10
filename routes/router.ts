import { Router, Request, Response } from 'express';

const router = Router();

router.get( '/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "Peticion GET - Lista"
    });
});

router.put( '/mensajes', (req: Request, res: Response) => {

    // Informacion recibida
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;

    res.json({
        ok: true,
        nombres,
        apellidos
    });
});


router.put( '/mensajes/:id', ( req: Request, res: Response ) => {
    
    // Informacion recibida
    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const id = req.params.id;

    res.json({
        ok: true,
        nombres,
        apellidos,
        id
    });
});

export default router;