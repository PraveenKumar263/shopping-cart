export function Cart({ numItems }) {
    return (
      <span className="badge bg-dark text-white ms-1 rounded-pill">{numItems}</span>
    );
  }