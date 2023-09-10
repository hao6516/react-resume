
export default function Information(props: any) {
    console.log(props.information);
    const information = props.information;
    return (
        <div>
            {information.map(item => {
                return (
                    <div>{item[0]}:{item[1]}</div>
                )
            })}
        </div>
    )
}