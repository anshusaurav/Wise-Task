import React, { Component } from 'react';
import Dock from 'react-dock'
import './scss/index.scss'
import UserList from "./components/UserList"
import { GrClose } from 'react-icons/gr'
import { TiSortAlphabetically } from 'react-icons/ti'
import Colors from './Utilities'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["story", "feeldsadasdsawqeqwqe", "may", "sure", "curious", "best", "does", "entirely", "meal", "pride", "lift", "difference", "star", "should", "what", "only", "color", "whenever", "hardly", "smoke", "partly", "coffee", "more", "xebec", "xenia", "xenon", "xeric", "xerus", "xians", "xoana", "numeral", "firm", "atmosphere", "clearly", "her", "your", "equipment", "heart", "rock", "cake", "depth", "noun", "if", "medicine", "labor", "stairs", "treated", "vapor", "closely", "personal", "favorite", "brain", "locate", "tent", "calm", "swung", "judge", "frame", "felt", "sitting", "weather", "enjoy", "same", "calm", "hurt", "mile", "advice", "route", "bone", "shoe", "no", "put", "clean", "typical", "frozen", "live", "feet", "us", "flower", "active", "wise", "best", "grade", "contain", "ate", "train", "day", "ago", "lot", "rock", "winter", "children", "wise", "row", "improve", "search", "famous", "wait", "tonight", "coast", "shelter", "citizen", "sail", "paper", "lion", "standard", "exactly", "also", "drop", "save", "quite", "detail", "beautiful", "disappear", "lot", "service", "pan", "desert", "transportation", "planet", "almost", "war", "indicate", "visitor", "business", "greater", "enough", "just", "swing", "fill", "nor", "service", "hide", "base", "bowl", "piece", "myself", "take", "bone", "learn", "rich", "standard", "event", "tone", "strange", "compass", "see", "health", "wheat", "invented", "identity", "parent", "child", "heart", "vertical", "empty", "believed", "trail", "branch", "seldom", "not", "feathers", "little", "mistake", "reach", "mental", "stranger", "company", "population", "label", "therefore", "party", "disease", "throughout", "pipe", "operation", "spoken", "today", "explain", "golden", "fair", "mice", "bush", "branch", "concerned", "enjoy", "express", "police", "attention", "happen", "gulf", "ants", "some", "mass", "amount", "part", "owner", "thank", "former", "loud", "running", "society", "unit", "watch", "aloud", "needs", "anyone", "shall", "feature", "rope", "wire", "rope", "model", "castle", "mill", "mice", "bill", "early", "save", "globe", "zebra", "wonder", "sat", "clean", "tropical", "at", "grandmother", "eager", "best", "memory", "range", "office", "planet", "opposite", "cream", "younger", "shown", "iron", "race", "hour", "folks", "took", "television", "enemy", "oxygen", "store", "mean", "year", "trunk", "claws", "those", "stomach", "evening", "attack", "goose", "nervous", "straight", "thick", "taste", "tip", "rock", "by", "pile", "pour", "missing", "cast", "breakfast", "select", "right", "tool", "beyond", "than", "safe", "clothes", "crop", "thread", "noted", "thee", "speech", "hollow", "enjoy", "car", "farther", "sit", "dry", "bad", "sometime", "swing", "worried", "fat", "noted", "ruler", "oil", "mainly", "afternoon", "entirely", "tune", "having", "additional", "visit", "swim", "poet", "route", "rush", "curious", "rose", "exclaimed", "note", "species", "necessary", "appearance", "region", "needed", "morning", "angry", "atom", "harbor", "probably", "part", "suppose", "firm", "stream", "travel", "caught", "prove", "occasionally", "feathers", "although", "sunlight", "gave", "exist", "nobody", "customs", "law", "thou", "hundred", "weather", "length", "atomic", "particularly", "pure", "water", "wrong", "struggle", "saved", "furniture", "president", "cabin", "themselves", "share", "noon", "develop", "vote", "rose", "free", "carry", "lead", "very", "slept", "slave", "wear", "combine", "fix", "street", "essential", "anywhere", "active", "education", "power", "occasionally", "pony", "serious", "leader", "paper", "trouble", "page", "scale", "greatly", "level", "fog", "tobacco", "worse", "sudden", "reach", "ring", "floor", "tin", "plastic", "sudden", "town", "period", "outside", "tobacco", "indicate", "shells", "realize", "allow", "entirely", "stuck", "ground", "indeed", "spirit", "breeze", "mouse", "escape", "manner", "various", "entire", "salt", "skill", "fort", "account", "natural", "battle", "good", "tribe", "fall", "automobile", "let", "everybody", "bring", "built", "court", "see", "two", "yet", "slip", "movie", "previous", "prize", "floating", "gas", "frame", "suddenly", "stiff", "fast", "cross", "drive", "medicine", "heading", "bet", "press", "recall", "vowel", "hot", "bear", "quietly", "review", "interest", "must", "curve", "tune", "written", "had", "dollar", "feel", "object", "mixture", "powerful", "wind", "report", "planet", "fact", "stomach", "early", "special", "very", "industry", "feet", "do", "definition", "getting", "development", "send", "room", "badly", "nearer", "gift", "able", "storm", "pole", "claws", "shut", "clock", "recognize", "begun", "away", "tomorrow", "progress", "weak", "atomic", "am", "pick", "sand", "essential", "various", "fuel", "into", "bigger", "straw", "girl", "line", "further", "announced", "toy", "knew", "thirty"],
      positionIdx: 2,
      dimModeIdx: 0,
      isVisible: true,
      fluid: false,
      size: 400,
      mode: 'enter',
      name: '',
      email: '',
      isSubmitable: false,

    };
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value })
    if (this.checkValidUser()) {
      this.setState({ isSubmitable: true })
    } else {
      this.setState({ isSubmitable: false })
    }
  }
  checkValidUser() {
    const { email, name } = this.state
    let res = true
    if (email.length < 5 || email.indexOf("@") <= 0 || name.trim().length === 0) {
      res = false
    }

    return res;
  }
  render() {

    const duration = 200;
    const dur = duration / 1000;
    const transitions = ['left', 'top', 'width', 'height']
      .map(p => `${p} ${dur}s cubic-bezier(0, 1.5, 0.5, 1)`)
      .join(',');
    const { name, email } = this.state;
    return (
      <div className="main">
        <div className="main-control-wrapper">
          <h1>Wise</h1>
          <div>
            <input type='checkbox'
              label='is visible'
              checked={this.state.isVisible}
              onChange={() => this.setState({
                isVisible: !this.state.isVisible
              })} />
          </div>
        </div>
        {this.state.mode === 'enter' ? (

          <Dock position='right'
            size={this.state.size}
            dimMode='opaque'
            isVisible={this.state.isVisible}
            onVisibleChange={this.handleVisibleChange}
            fluid={this.state.fluid}
            dimStyle={{ background: 'rgba(0, 0, 100, 0.2)' }}
            dockStyle={{ transition: transitions }}
            dockHiddenStyle={this.state.customAnimation ? {
              transition: [transitions, `opacity 0.01s linear ${dur}s`].join(',')
            } : null}
            duration={duration}>
            {({ position, isResizing }) =>
              <div className="sidebar">

                <div className="invoice-header" >
                  <h1>Create an invoice</h1>
                  <GrClose className="invoice-header-close"
                    onClick={() => this.setState({ isVisible: false })}
                  />
                </div>
                <div className="invoice-users">
                  <p className="invoice-users-text">Who are you sending the invoice to?</p>
                  <p className="invoice-users-text">Recents</p>
                  <div className="invoice-recent-users">
                    <div className="recent-users">
                      {
                        this.state.users.map((user, index) => (
                          <div className="recent-unit-user">
                            <div className="user-display-wrapper" style={{
                              background: Colors[index % 10]
                            }}>
                              <span>{user.toUpperCase()[0]}</span>
                            </div>
                            <p style={{ whiteSpace: 'nowrap', width: 50, overflow: 'hidden', textOverflow: 'ellipsis' }}>{user}</p>
                          </div>
                        ))
                      }
                    </div>

                  </div>
                </div>
                <div className="invoice-users-trail">

                </div>
                <div className="invoice-user-form">
                  <form>
                    <div className="invoice-user-form-name">
                      <h2>Name</h2>
                      <button className="invoice-user-contacts-btn" onClick={this.handleSwitch}>
                        <TiSortAlphabetically className="contact-btn-icon" />
                        Select from contacts
                      </button>
                    </div>
                    <div>
                      <input type="text" onChange={this.handleChange} name="name"
                        value={name} />
                    </div>
                    <h2>Email</h2>
                    <input type="text" onChange={this.handleChange} name="email"
                      value={email} />
                    <div className="invoice-form-controls">
                      <button className="cancel-btn">Cancel</button>
                      <button className="submit-btn" disabled={!this.state.isSubmitable}>Next</button>
                    </div>
                  </form>
                </div>

              </div>
            }
          </Dock>) : (
            <Dock position='right'
              size={this.state.size}
              dimMode='opaque'
              isVisible={this.state.isVisible}
              onVisibleChange={this.handleVisibleChange}
              fluid={this.state.fluid}
              dimStyle={{ background: 'rgba(0, 0, 100, 0.2)' }}
              dockStyle={{ transition: transitions }}
              dockHiddenStyle={this.state.customAnimation ? {
                transition: [transitions, `opacity 0.01s linear ${dur}s`].join(',')
              } : null}
              duration={duration}>
              <UserList handleSwitch={this.handleSwitch} />
            </Dock>
          )
        }
      </div>
    );
  }
  handleSwitch = (event) => {
    event.preventDefault();
    this.setState({ mode: this.state.mode === 'enter' ? 'select' : 'enter' })
  }

  handleVisibleChange = isVisible => {
    this.setState({ isVisible });
  }

  handleSizeChange = size => {
    this.setState({ size });
  }

  handlePositionClick = () => {
    this.setState({ positionIdx: (this.state.positionIdx + 1) % 4 });
  }

  handleDimModeClick = () => {
    this.setState({ dimModeIdx: (this.state.dimModeIdx + 1) % 3 });
  }
}