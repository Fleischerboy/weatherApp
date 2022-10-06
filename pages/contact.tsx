
import Form from "../components/FormElements/Form";
import WeatherDropdown from "../components/FormElements/WeatherDropdown";
import StaticText from "../components/UIElements/staticText";
import Title from "../components/UIElements/Title";
import { useWeatherContext } from "../context/weatherContext";

const Contact = () => {
    const {currentLocation } = useWeatherContext()
    const handleSubmit = (data: {email: string, name: String}) => {
        alert(data);
    }
    return <>
    <Title title={'Kontakt oss'}/>
    <StaticText text="lorem ipsum"/>
    <Form handleSubmit={handleSubmit} currentLocation={currentLocation}/>
    </>
}

export default Contact;