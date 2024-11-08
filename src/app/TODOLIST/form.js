"use client";

import React from "react";
import addDataTodolist from "./action";
const Form = () => {
  return (
    <div>
      <form id="todo-form" action={addDataTodolist}>
        <input
          type="text"
          id="new-task"
          name="name"
          placeholder="أدخل مهمة جديدة..."
          required
        />
        <button type="submit">إضافة</button>
      </form>
    </div>
  );
};

export default Form;
