import { useState } from "react";

const useValue = (initValue = "") => {
const [value, setValue] = useState(initValue)

const onChange = (e: any) => {
    setValue(e.target.value)
}

return {value, onChange}
}


export default useValue;
