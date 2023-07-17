import React  from "react";
import { useParams } from "react-router-dom"
import { projetsList } from '../datas/Projets'
import { Navigate } from 'react-router-dom';

export default function NavigationError() 
{
        const params = useParams()

        const found = projetsList.find(element => element.id === params.id);

        if (found === undefined) 
        {
                return <Navigate to="/ID-Incorrect" />;
        }

        return 
}

