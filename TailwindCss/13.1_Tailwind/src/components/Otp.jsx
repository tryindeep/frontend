import { useRef , useState  } from "react";
import { Button } from "./Button";

export const Otp = ({}) => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    
    const [disabled, setDisable] = useState(true)
  return <div className="flex justify-center">
        <SubOtpBox ref={ref1} onDone={() => { ref2.current.focus(); }}></SubOtpBox>
        <SubOtpBox ref={ref2} onDone={() => { ref3.current.focus(); }}></SubOtpBox>
        <SubOtpBox ref={ref3} onDone={() => { ref4.current.focus(); }}></SubOtpBox>
        <SubOtpBox ref={ref4} onDone={() => { ref5.current.focus(); }}></SubOtpBox>
        <SubOtpBox ref={ref5} onDone={() => { ref6.current.focus(); }}></SubOtpBox>
        <SubOtpBox ref={ref6} onDone={() => { setDisable(false); }}></SubOtpBox>
        {/* <SubOtpBox></SubOtpBox> */}

        <Button disabled={disabled}>Continue</Button>
  </div>;
};


function SubOtpBox({
    ref ,
    onDone
}) {
    return <div>
        <input ref={ref} onChange={(e) => {
            onDone();
        }} type="text"  className="w-[40px] h-[50px] rounded-xl bg-blue-500 m-1 outline-none
        text-white px-4"/>
    </div>
}

