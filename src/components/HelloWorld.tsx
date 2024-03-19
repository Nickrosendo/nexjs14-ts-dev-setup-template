export const HelloWorld = ({ message }: { message: string }) => {
	return (<div data-testid="HelloWorld">
		Hello World, {message}
	</div>)
}
