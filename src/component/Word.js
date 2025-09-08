//각 단어마다 뜻보거나 지워저야함. 즉 stste가 필요함
import { useState } from "react";


export default function Word({ word}) {
    const [isShow, setIsShow] = useState(false); //기본값 false, setIsShow : isShow 값을 바꿔주는 함수
    const [isDone, setIsDone] = useState(word.isDone); //word.isDone : data.json의 isDone 값
    function toggleShow() {
        setIsShow(!isShow); //isShow의 반대값으로 바꿔줌
    }

    function toggleDone() {
        setIsDone(!isDone); //isDone의 반대값으로 바꿔줌
    }

    return (
        <tr className={isDone ? "off" : ""}>   {/*하나의 요소를 삼항연산자로 여러가지 속성 제어 가능*/}
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDone}/>
                </td>
              <td>{word.eng}</td>
              <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}
                    </button>
                    <button className="btn_del">삭제</button>
                </td>
            </tr>
    );
}
