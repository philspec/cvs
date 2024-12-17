export default async function ServerComponent() {
    console.log("Server component rendered");
    return (
        <div>
           This is a server component. Data fetching is handled in the client component.
        </div>
    );
}