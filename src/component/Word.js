//각 단어마다 뜻보거나 지워저야함. 즉 stste가 필요함
import { useState } from "react";
import { json } from "react-router-dom";


export default function Word({ word : w}) {  //word라는 props를 받아오는데, 그 이름을 w로 바꿔줌
    const [word, setWords] = useState(w); //삭제하고 그걸 바로 렌더링 함. 그러기 위해선 개별로 출력이 필여
    const [isShow, setIsShow] = useState(false); //기본값 false, setIsShow : isShow 값을 바꿔주는 함수
    const [isDone, setIsDone] = useState(word.isDone); //word.isDone : data.json의 isDone 값
    function toggleShow() {
        setIsShow(!isShow); //isShow의 반대값으로 바꿔줌
    }

    function toggleDone() {
    const updatedWord = {
        ...word,
        isDone: !isDone,
    };

    fetch(`http://localhost:3001/words/${word.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWord),
    })
    .then(res => {
        if (res.ok) {
            setIsDone(!isDone);
            }
    });


   

    function del() {
        if(window.confirm("정말 삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: "DELETE",
            }).then(res => {
                if(res.ok) {
                    setWords(null);
                }});
            }
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
                    <button onClick = {del}className="btn_del">삭제</button>
                </td>
            </tr>
    );
}
};
