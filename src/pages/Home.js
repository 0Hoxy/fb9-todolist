import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Home() {
  const { user } = useAuthContext();
  const { documents: todos } = useCollection('todos', user.uid);

  return (
    <div className="App">
      {todos && <TodoList todos={todos} />}
      <TodoForm />
    </div>
  );
}