import './App.css'
import {Button} from "@/components/ui/button.tsx";

function App() {

    function handleOnClick() {
        alert("shad cn work !")
    }

    return (
    <>
     <h1 className="text-3xl font-bold underline bg-red-200">
          Hello world!
    </h1>
        <Button onClick={()=>handleOnClick()} >
            Test Shad Cn
        </Button>
    </>
  )
}

export default App
