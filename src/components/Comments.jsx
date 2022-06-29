import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Comments({ id }) {
  const [comments, setComments] = useState();
  const { setComment, getComments } = UsePostsContext();
  const [pag, setpag] = useState(0);
  const { isLogged } = UseAuthContext();
  const message = useRef();
  useEffect(() => {
    setpag(10);
  }, []);
  useEffect(() => {
    getComment();
  }, [pag]);
  const getComment = async () => {
    const res = await getComments(0, pag, id);
    setComments(res.data);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await setComment({
      post_commit: message.current.value,
      post_id: +id,
    });
    await getComment();
    message.current.value = "";
  };
  return (
    <Wrapper>
      {isLogged && (
        <form onSubmit={submitHandler}>
          <label>Enter comment:</label>
          <div className="flex">
            <input
              type="text"
              placeholder="Write here..."
              className="form-input"
              name="message"
              ref={message}
            />
            <input type="submit" className="form-input" value={"Submit"} />
          </div>
        </form>
      )}
      {comments ? (
        comments.map((i) => (
          <div className="comment">
            <p style={{ fontSize: "16px" }}>{i.post_commit}</p>
            <div className="flex between">
              <NavLink to={`/profile/${i.reader_id}`}>
                <p>
                  {i.first_name} {i.second_name}
                </p>
              </NavLink>
              <p>June 16, 2022</p>
            </div>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
      {comments &&
        (comments.length < pag ? (
          ""
        ) : (
          <p
            onClick={() => setpag(pag + 10)}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            Vew more
          </p>
        ))}
    </Wrapper>
  );
}

export default Comments;
const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  @media (max-width: 991px) {
    padding: 20px;
  }
  .form-input[type="submit"] {
    flex: 0 0 140px;
    width: 100% !important;
  }
  form {
    margin-bottom: 20px;
    @media (max-width: 767px) {
      .flex {
        flex-direction: column;
        input {
          height: 100%;
          flex: 0 0 40px !important;
          font-size: 14px !important;
        }
      }
    }
  }

  .comment {
    margin-bottom: 20px;
    padding-left: 1rem;
    border-left: 2px solid #d6d6d6;
    & > p {
      @media (max-width: 767px) {
        font-size: 14px !important;
        margin-bottom: 12px;
      }
    }
  }
`;
