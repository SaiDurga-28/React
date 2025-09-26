import { useEffect, useState } from "react";

const HookUseEffect = () => {
    const [userInput, setUserInput] = useState("");
    const [Fsd, setFsd] = useState("")
    var Words = [];
    if (userInput?.length !== 0) {
        Words = userInput.trim().split(" ")
    }

    useEffect(() => {
        const Temp = userInput.toLowerCase().includes("fsd")
        console.log(Temp)
        if (Temp) {
            alert("FSD entered")
            setFsd("FSD Enterd")
        }
    }, [userInput])

    return (
        <>
            <input type="text" placeholder="Enter Something" onChange={(event) => setUserInput(event.target.value)} />
            <p>{userInput}</p>
            <p>Total Characters Length: {userInput.length}</p>
            <p>Total Words Count:{Words.length}</p>
            <p>{Fsd}</p>
        </>
    )
}

export default HookUseEffect;