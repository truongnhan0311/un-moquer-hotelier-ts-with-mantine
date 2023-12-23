import { Card, Text, Stack } from '@mantine/core'
import { IAlert } from 'src/utils/types'

export const AlertsListCard: React.FC<{
	alert: IAlert
}> = ({ alert }) => {
	return (
		<Card
			py="md"
			px="lg"
			w="100%"
			shadow="none"
			radius={0}
			key={alert._id}
			style={{ flexShrink: 0, borderBottom: `1px solid var(--mantine-color-gray-3)` }}>
			<Stack justify="flex-start" gap={0} align="flex-start">
				<Text fw={500} c="dark.4" lineClamp={1}>
					{alert.message}
				</Text>
				<Text fw={500} c="dimmed" size="sm" lineClamp={1}>
					Date/Time: Today
				</Text>
			</Stack>
		</Card>
	)
}
