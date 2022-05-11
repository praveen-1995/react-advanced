import React, { useState, useReducer, useEffect } from "react";
import Modal from "./Modal";
import { data } from "../../../data";

// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <div>
        {state.isModalOpen && (
          <Modal
            closeModal={closeModal}
            modalContent={state.modalContent}
          ></Modal>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div>
            <button type="submit" className="form-btn">
              add
            </button>
          </div>
        </form>
      </div>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
