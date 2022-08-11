import React, { lazy } from 'react'
import { Suspense } from 'react'
import env from 'env'
import Header from './components/Header'
const TodoInput11082022 = lazy(() => import('./components/TodoInput11082022'))
const TodoItem11082022 = lazy(() => import('./components/TodoItem11082022'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [refetch, setRefetch] = React.useState(false)

  React.useEffect(() => {
    fetch(`${env.BLOCK_FUNCTION_URL}/listTodos11082022`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data ? data.map(({ id, item }) => ({ id, item: item.name })) : [])
        setRefetch(false)
      })
      .catch((err) => console.log(err))
  }, [refetch])
  return (
    <Suspense fallback={<p>loading..</p>}>
      <Header />
      <div className="w-1/2 mx-auto p-8 mt-8 border-dashed border-2 border-sky-500">
        <h1>Container</h1>
        <TodoInput11082022 refetch={setRefetch} />
        {todos.map((item) => (
          <TodoItem11082022 refetch={setRefetch} item={item.item} id={item.id} key={item.id} />
        ))}
      </div>
    </Suspense>
  )
}

export default App
