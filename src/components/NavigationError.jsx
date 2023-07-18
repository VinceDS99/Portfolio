import React  from "react";
import { useParams } from "react-router-dom"
import { projetsList } from '../datas/Projets'
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function NavigationError() 
{
        const params = useParams()

        const found = projetsList.find(element => element.id === params.id);

        if (found === undefined) 
        {
                swal
                (
                        {
                                title: "Erreur 404",
                                text: "Mauvais ID entré ou la page n'est plus disponible",
                                button: "Retour à l'accueil",
                                className: "alert",
                        }
                );

                return <Navigate to="/" />;
        }

        return 
}

