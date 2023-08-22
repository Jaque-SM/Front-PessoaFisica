import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function CreateAdress () {

    let navigate = useNavigate();

    const [endereco, setEndereco] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        email: "",

    });

    








}