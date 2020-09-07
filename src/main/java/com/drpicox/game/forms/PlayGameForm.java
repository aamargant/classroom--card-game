package com.drpicox.game.forms;


import com.drpicox.game.cards.CardSetFilter;

import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

public class PlayGameForm {

    private String playerName;
    private SortedSet<PlayCardForm> cards = new TreeSet<>();

    public PlayGameForm(String playerName) {
        this.playerName = playerName;
    }

    public SortedSet<PlayCardForm> getCards() {
        return cards;
    }

    public void addCards(Iterable<VisibleCardForm> cards) {
        cards.forEach(c -> addCard(c));
    }

    private void addCard(VisibleCardForm c) {
        cards.add(new PlayCardForm(c.getId(), c.getPile()));
    }
}
