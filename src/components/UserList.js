import React from "react";
import "./../../node_modules/antd/dist/antd.css"
import AlphabetList from "./AlphabetList"
import { BiArrowBack } from "react-icons/bi"
function UserList(props) {
    const data = ["story", "feel", "may", "sure", "curious", "best", "does", "entirely", "meal", "pride", "xebec", "xenia", "xenon", "xeric", "xerus", "xians", "xoana", "lift", "difference", "star", "should", "what", "only", "color", "whenever", "hardly", "smoke", "partly", "coffee", "more", "numeral", "firm", "atmosphere", "clearly", "her", "your", "equipment", "heart", "rock", "cake", "depth", "noun", "if", "medicine", "labor", "stairs", "treated", "vapor", "closely", "personal", "favorite", "brain", "locate", "tent", "calm", "swung", "judge", "frame", "felt", "sitting", "weather", "enjoy", "same", "calm", "hurt", "mile", "advice", "route", "bone", "shoe", "no", "put", "clean", "typical", "frozen", "live", "feet", "us", "flower", "active", "wise", "best", "grade", "contain", "ate", "train", "day", "ago", "lot", "rock", "winter", "children", "wise", "row", "improve", "search", "famous", "wait", "tonight", "coast", "shelter", "citizen", "sail", "paper", "lion", "standard", "exactly", "also", "drop", "save", "quite", "detail", "beautiful", "disappear", "lot", "service", "pan", "desert", "transportation", "planet", "almost", "war", "indicate", "visitor", "business", "greater", "enough", "just", "swing", "fill", "nor", "service", "hide", "base", "bowl", "piece", "myself", "take", "bone", "learn", "rich", "standard", "event", "tone", "strange", "compass", "see", "health", "wheat", "invented", "identity", "parent", "child", "heart", "vertical", "empty", "believed", "trail", "branch", "seldom", "not", "feathers", "little", "mistake", "reach", "mental", "stranger", "company", "population", "label", "therefore", "party", "disease", "throughout", "pipe", "operation", "spoken", "today", "explain", "golden", "fair", "mice", "bush", "branch", "concerned", "enjoy", "express", "police", "attention", "happen", "gulf", "ants", "some", "mass", "amount", "part", "owner", "thank", "former", "loud", "running", "society", "unit", "watch", "aloud", "needs", "anyone", "shall", "feature", "rope", "wire", "rope", "model", "castle", "mill", "mice", "bill", "early", "save", "globe", "zebra", "wonder", "sat", "clean", "tropical", "at", "grandmother", "eager", "best", "memory", "range", "office", "planet", "opposite", "cream", "younger", "shown", "iron", "race", "hour", "folks", "took", "television", "enemy", "oxygen", "store", "mean", "year", "trunk", "claws", "those", "stomach", "evening", "attack", "goose", "nervous", "straight", "thick", "taste", "tip", "rock", "by", "pile", "pour", "missing", "cast", "breakfast", "select", "right", "tool", "beyond", "than", "safe", "clothes", "crop", "thread", "noted", "thee", "speech", "hollow", "enjoy", "car", "farther", "sit", "dry", "bad", "sometime", "swing", "worried", "fat", "noted", "ruler", "oil", "mainly", "afternoon", "entirely", "tune", "having", "additional", "visit", "swim", "poet", "route", "rush", "curious", "rose", "exclaimed", "note", "species", "necessary", "appearance", "region", "needed", "morning", "angry", "atom", "harbor", "probably", "part", "suppose", "firm", "stream", "travel", "caught", "prove", "occasionally", "feathers", "although", "sunlight", "gave", "exist", "nobody", "customs", "law", "thou", "hundred", "weather", "length", "atomic", "particularly", "pure", "water", "wrong", "struggle", "saved", "furniture", "president", "cabin", "themselves", "share", "noon", "develop", "vote", "rose", "free", "carry", "lead", "very", "slept", "slave", "wear", "combine", "fix", "street", "essential", "anywhere", "active", "education", "power", "occasionally", "pony", "serious", "leader", "paper", "trouble", "page", "scale", "greatly", "level", "fog", "tobacco", "worse", "sudden", "reach", "ring", "floor", "tin", "plastic", "sudden", "town", "period", "outside", "tobacco", "indicate", "shells", "realize", "allow", "entirely", "stuck", "ground", "indeed", "spirit", "breeze", "mouse", "escape", "manner", "various", "entire", "salt", "skill", "fort", "account", "natural", "battle", "good", "tribe", "fall", "automobile", "let", "everybody", "bring", "built", "court", "see", "two", "yet", "slip", "movie", "previous", "prize", "floating", "gas", "frame", "suddenly", "stiff", "fast", "cross", "drive", "medicine", "heading", "bet", "press", "recall", "vowel", "hot", "bear", "quietly", "review", "interest", "must", "curve", "tune", "written", "had", "dollar", "feel", "object", "mixture", "powerful", "wind", "report", "planet", "fact", "stomach", "early", "special", "very", "industry", "feet", "do", "definition", "getting", "development", "send", "room", "badly", "nearer", "gift", "able", "storm", "pole", "claws", "shut", "clock", "recognize", "begun", "away", "tomorrow", "progress", "weak", "atomic", "am", "pick", "sand", "essential", "various", "fuel", "into", "bigger", "straw", "girl", "line", "further", "announced", "toy", "knew", "thirty"]

    return (
        <div className="userlist">
            <div className="userlist-header">
                <button className="userlist-header-btn" onClick={props.handleSwitch} >
                    <BiArrowBack className="userlist-header-icon" />
                    <span>Select Contact</span>
                </button>
            </div>
            <div className="userlist-input-wrapper">
                <input className="userlist-input"
                    type="text"
                    name="txtBox"
                    placeholder="Search contacts" />
            </div>
            <AlphabetList
                className="alpha-list"
                data={data}
                style={{
                    width: "350px",
                    height: "80%",
                    backgroundColor: "#fff",
                    padding: "4px"
                }}
                generateFn={(item, index) => {
                    return (
                        <div className="alphabet-tag-wrapper">
                            <div className="alphabet-tag" key={item + index}>
                                {item}
                                <p className="alphabet-list-email">{item + '@gmail.com'}</p>
                            </div>
                        </div>
                    );
                }}
            />
        </div>
    );
}

export default UserList
