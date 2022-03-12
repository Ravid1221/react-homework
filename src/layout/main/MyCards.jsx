import { getMyCards } from "../../services/cardService";
import Card from "../common/Cards/card";
import CardExtends from "../common/Cards/CardExtends";
import PageHeader from "../common/pageHeader";
import { Link } from "react-router-dom";

class MyCards extends CardExtends {
  state = {
    cards: [],
  };

  async componentDidMount() {
    try {
      const { data } = await getMyCards();
      this.setState({ cards: data });
    } catch (err) {
      console.log(err);
    }
  }

  renderCards = (cards) => {
    if (!cards.length) return <div>No Cards In The State Object...</div>;
    return cards.map((card, i) => (
      <Card key={i} card={card} handleDelete={this.handleDelete} />
    ));
  };

  render() {
    const cards = [...this.state.cards];
    return (
      <>
        <PageHeader
          title="Business Card App"
          subTitle="ear you can see all your cards"
        />
        <span className="btn btn-info">
          <Link to="/create-card">Click me</Link>
        </span>
        <div className="container">
          <div className="row">{this.renderCards(cards)}</div>
        </div>
      </>
    );
  }
}

export default MyCards;
