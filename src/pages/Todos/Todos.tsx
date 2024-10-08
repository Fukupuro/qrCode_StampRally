import { FC } from 'react'
import { Cluster } from 'smarthr-ui'
import styled from 'styled-components'

import { TodoSchema } from '@/.openapi/api'

import { BreadcrumbsList, BreadcrumbsType } from '@/components/BreadcrumbsList'

import { AddTodoButton } from './AddTodo'
import { ExistTodo } from './ExistTodo'
import { TodoCard } from './TodoCard'

type Props = {
	todos: TodoSchema[]
	breadItems: BreadcrumbsType[]
}

export const Todos: FC<Props> = ({ todos, breadItems }) => {
	return (
		<div>
			<BreadcrumbsList items={breadItems} />
			<TopCluster>
				<h1>Todo</h1>
				<AddTodoButton />
			</TopCluster>
			{todos.length > 0 ? (
				todos.map((todo, index) => <TodoCard key={`${todo.ID} ${index}`} todo={todo} />)
			) : (
				<ExistTodo />
			)}
		</div>
	)
}

const TopCluster = styled(Cluster)`
	justify-content: space-between;
	align-items: center;
`
