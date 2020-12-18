import React, { Component } from 'react';
import EvenAndOdds from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {
    render() {
        return (
            <section>
            <p>Hello World.</p>
            <di>
                <EvenAndOdds/>
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </di>
            </section>
        )
    }
}

export default TopicBrowser;