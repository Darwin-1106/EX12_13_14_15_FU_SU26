//EX12
import Q1 from "./Ex12/Q1"
import Q2 from "./Ex12/Q2"
import Q3 from "./Ex12/Q3"
import Q4 from "./Ex12/Q4"
import Q5 from "./Ex12/Q5"
import Q6 from "./Ex12/Q6"
//EX13
import UserPosts from "./Ex13/Q1_13"
import CountdownTimer from "./Ex13/Q2_13"
import WindowSize from "./Ex13/Q3_13"
import ValidatedInput from "./Ex13/Q4_13"

// Định nghĩa ngoài component để tránh tạo function mới mỗi lần render
const isLongEnough = (val) => val.length >= 3;

function App () {
  return (
    <div>
      <p>
        Ex12 - Q1
      </p>
      <Q1 />
      <br/>
      <br/>
      <p>
        Ex12 - Q2
      </p>
      <Q2 />
      <br/>
      <br/>
      <p>
        Ex12 - Q3
      </p>
      <Q3 />
      <br/>
      <br/>
      <p>
        EX12 - Q4
      </p>
      <Q4 />
      <br/>
      <br/>
      <p>
        Ex12 - Q5
      </p>
      <Q5 />
      <br/>
      <br/>
      <p>
        Ex12 - Q6
      </p>
      <Q6 />
      <br/>
      <br/>
      <p>
        Ex12 - Q7
      </p>
      <br/>
      <br/>
      <p>
        Ex13 - Q1
      </p>
      <UserPosts userId={1} />
      <br/>
      <br/>
      <p>
        Ex13 - Q2
      </p>
      <CountdownTimer initialValue={20} />
      <br/>
      <br/>
      <p>
        Ex13 - Q3
      </p>
      <WindowSize />
      <br/>
      <br/>
      <p>
        Ex13 - Q4
      </p>
      <ValidatedInput
        validationFunction={isLongEnough}
        errorMessage="Input must be at least 3 characters!"
      />
      <br/>
      <br/>
    </div>
  )
}
export default App;