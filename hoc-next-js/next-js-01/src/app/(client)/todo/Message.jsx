const removeMessage = async () => {
    const response = await fetch("http://localhost:3000/api/test");
    const data = await response.json();
    return data;
};
const MessageData = async ({ message }) => {
    await removeMessage();
    return <div>{message.value}</div>;
};
export default MessageData;
