import { Component } from "react";

import ReactTooltip from "react-tooltip";

import "../styles/status.component.css";

interface P {
  size: number;
  color: string;
  click: number;
  clear: boolean;
}

interface S {
  setSize: boolean;
  newSize: number;
}

export default class Status extends Component<P, S> {
  constructor(props: P) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      setSize: false,
      newSize: this.props.size
    });

    ReactTooltip.rebuild();
  }

  getNewSize() {
    return this.state?.newSize || this.props.size;
  }

  render() {
    return (
      <section className="status">
        <article className="text">
          <details>
            <summary
              onClick={() => this.setState({ setSize: !this.state?.setSize && this.state?.newSize === this.props.size })}
              >
              크기: <span className={[this.state?.setSize ? "before" : ""].join(" ").trim()}>{this.props.size} ⨯ {this.props.size}</span>
              {
                this.state?.setSize
                ? <span className="after"> → {this.getNewSize()} ⨯ {this.getNewSize()}</span>
                : <></>
              }
            </summary>
            <div className="desc">
              크기 설정
              <input
                type="range"
                min="2"
                max="12"
                defaultValue={this.props.size.toString()}
                onChange={(event) => this.setState({ newSize: +event.currentTarget.value })}
                />
                <button
                  className="sumbit"
                  data-for="button"
                  data-tip="sumbit"
                  onClick={() => {
                    localStorage.setItem("size", this.state?.newSize.toString())
                    window.location.href = "/";
                  }}
                  />
            </div>
          </details>
        </article>
        <article className="text">
          현재 색상 : <ul className={["cell", "preview", this.props.color].join(" ")} />
        </article>
        <article className="text">
          {
            this.props.clear
            ? (<>게임 승리! 총 <span className="desc">{this.props.click}</span>번 눌렀어요!</>)
            : (<>게임 진행 중. 누른 횟수 : <span className="desc">{this.props.click}</span></>)
          }
          <button
            className="restart"
            style={{ display: this.props.clear ? "inline-block" : "none" }}
            data-for="button"
            data-tip="restart"
            onClick={() => window.location.href = "/"}
            />
        </article>
      </section>
    );
  };
}