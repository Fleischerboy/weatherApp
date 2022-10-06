const StaticText = (props: {text: string}) => {
    const {text} = props;
    return <p className="description">{text}</p>
}

export default StaticText;