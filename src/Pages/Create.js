export function Create({ appendCard, setPage }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const tagsArray = [data.tags];
    appendCard(data.question, data.answer, tagsArray);
    console.log(data.tags);
    setPage("home");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Your question</label>
        <textarea
          className="forminput forminput__question"
          id="question"
          name="question"
          maxLength="150"
        ></textarea>
        <article className="formquestion-counter"></article>
        <label>Your answer</label>
        <textarea
          className="forminput forminput__answer"
          id="answer"
          name="answer"
          maxLength="150"
        ></textarea>
        <article className="formanswer-counter"></article>
        <label>Tag</label>
        <input
          type="text"
          className="forminput forminput__tags"
          id="tags"
          name="tags"
          maxLength="30"
        />
        <article className="formtag-counter"></article>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
