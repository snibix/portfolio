function Contact() {
  return (
    <form action="#" method="POST">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Entrez votre nom"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Entrez votre email"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="4"
          placeholder="Écrivez votre message"
          required
        ></textarea>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </div>
    </form>
  );
}

Contact.propTypes = {};

export default Contact;
