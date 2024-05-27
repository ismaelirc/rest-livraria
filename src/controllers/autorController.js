import { autor } from '../models/Autor.js';

class AutorController{

    static async listarAutores(req, res){
        try {
            const listaAutors = await autor.find({});
    
            res.status(200).json(listaAutors);            
        } catch (error) {
            res.status(500).json({'message': `${error.message} - Falha ao listar Autor`});
        }
        
    }

    static async listarAutorPorId(req, res){
        try {

            const id = req.params.id;
            const AutorEncontrado = await autor.findById(id);
    
            res.status(200).json(AutorEncontrado);            
        } catch (error) {

            res.status(500).json({'message': `${error.message} - Falha ao buscar Autor por ID`});
        }
        
    }

    static async atualizarAutor(req, res){
        try {

            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
    
            res.status(200).json({'message': 'Autor atualizado'});            
        } catch (error) {
            
            res.status(500).json({'message': `${error.message} - Falha ao atualizar Autor`});
        }
        
    }

    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body);
            
            res.status(201).json(novoAutor);
        }catch(error){
            res.status(500).json({'message': `${error.message} - Falha ao cadastrar Autor`});
        }
        
    }

    static async deletarAutores(req,res){
        try{

            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(201).json({'message': 'Autor deletado'});

        }catch(error){
            res.status(500).json({'message': `${error.message} - Falha ao deletar Autor`});
        }
    }

};

export default AutorController;