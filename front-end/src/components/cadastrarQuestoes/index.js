import axios from "axios";
import ptBR from "date-fns/locale/pt-BR";
import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const baseURL = "http://localhost:8010/api/questoes";

function ModalQuestao(props) {
  const usuarioToken = useSelector((state) => state.usuarioToken);
  const [show, setShow] = useState(true);

  const [titulo, setTitulo] = useState("");


  // const materias = [
  //   "Desenvolvimento Web 1",
  //   "Programação Desktop",
  //   "Teste De Software",
  //   "Teoria da computação",
  //   "Redes de computadores",
  // ];


  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${usuarioToken}`,
  };

  function excluir() {

    axios
      .post(baseURL, {
        headers: headers,
      })
      .then((res) => {
        toast.success("Conta Excluida com Sucesso !");
        
        props.close();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  }

  return (
    <div className="modal">
      <div>
        <Toaster />
      </div>
      <Modal show={show} onHide={props.close}>
        <Modal.Header closeButton>
          {props.item ? (
            <Modal.Title>DESATIVAR CONTA</Modal.Title>
          ) : (
            <Modal.Title>DESATIVAR CONTA</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="my-2">
            Motivo pelo qual deseja Desativar a sua conta.
            <input
              type="text"
              className="form-control"
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
              value={props.item && titulo}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Fechar
          </Button>
          <Button
            variant="primary"
            onClick={
              props.item
              ? () => {
                 
                }
              : excluir
            }
          >
            Desativar Conta
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalQuestao;
