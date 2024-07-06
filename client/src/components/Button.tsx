export default function Button(
    props:
        {
            text: string,
            function: () => void
        }) {

    return (
        <>
            <button onClick={props.function}>
                {
                    props.text
                }
            </button>
        </>
    )
}