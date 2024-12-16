import React, { useState } from "react";
import { useTodo } from "../../../context/TodoContext/TodoContext";
import { CustomButton } from "../../../UI-components/CustomButton/CustomButton";
import { CustomModal } from "../../../UI-components/CustomModal/CustomModal";
import { EditPopUp } from "./EditPopUp/EditPopUp";

import styles from "./todolistitem.module.scss";

const TodoListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const { text, completed, id } = item;

  const { removeTodo, toggleTodo } = useTodo();

  const itemStatus = completed ? "Done" : "Not Completed";

  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>{text}</span>
      <div className={styles.btnWrapper}>
        <CustomButton
          type={completed}
          text={itemStatus}
          onClick={() => toggleTodo(item.id)}
        />
        <CustomButton type="edit" text="Edit" onClick={openModal} />
        <CustomButton
          type="remove"
          text="Remove"
          onClick={() => removeTodo(id)}
        />
      </div>

      <CustomModal openModal={isModalOpen} setOpenModal={setIsModalOpen}>
        <EditPopUp item={item} setIsModalOpen={setIsModalOpen} />
      </CustomModal>
    </div>
  );
};

export { TodoListItem };
