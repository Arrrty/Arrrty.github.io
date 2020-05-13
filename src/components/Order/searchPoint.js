import React from 'react';

class SearchPoint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.point
        }
    }

    filter() {
        var filter, li, a, i;
        let input = document.querySelector("." + this.props.className + " input");
        let svg = document.querySelector("." + this.props.className + " svg");
        let list = document.querySelector("." + this.props.className + "__list");

        list.style.display = "flex";
        filter = input.value.toUpperCase();
        li = list.getElementsByTagName('li');

        if (input.value !== "") {
            svg.style.display = "block"
        } else {
            svg.style.display = "none"
        }

        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
        }
    }

    fill() {
        let a = window.event.target;
        let input = document.querySelector("." + this.props.className + " input");
        let svg = document.querySelector("." + this.props.className + " svg");
        let list = document.querySelector("." + this.props.className + "__list");
        input.value = a.innerHTML;
        list.style.display = "none";
        svg.style.display = "block";
        this.props.onChange(input.value);
        this.setState({
            value: input.value
        })
    }

    erase() {
        let svg = document.querySelector("." + this.props.className + " svg");
        let input = document.querySelector("." + this.props.className + " input");
        input.value = "";
        svg.style.display = "none";
        this.setState({
            value: ""
        })
    }

    li(i) {
        return (
            <li><a href="#" onClick={() => this.fill()}>{this.props.list[i]}</a></li>
        );
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }


    render() {
        return (
            <div className={this.props.className}>
                <span>{this.props.name}</span>
                <div className={this.props.className + "__form"}>
                    <div>
                        <input 
                            value={this.state.value}
                            onChange={(e) => this.handleChange(e)}
                            onKeyUp={() => this.filter()} 
                            type="text" 
                            placeholder="Начните вводить город ..."
                        />
                        <svg onClick={() => this.erase()} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                        </svg>
                    </div>
                    <ul className={this.props.className + "__list"}>
                        {this.li(0)}
                        {this.li(1)}
                        {this.li(2)}
                        {this.li(3)}
                        {this.li(4)}
                        {this.li(5)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchPoint;