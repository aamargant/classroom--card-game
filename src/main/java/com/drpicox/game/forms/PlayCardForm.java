package com.drpicox.game.forms;

public class PlayCardForm implements Comparable<PlayCardForm> {

    private long id;
    private String pile;

    public PlayCardForm(long id, String pile) {
        this.id = id;
        this.pile = pile;
    }

    public long getId() {
        return id;
    }

    public String getPile() {
        return pile;
    }

    @Override
    public int compareTo(PlayCardForm o) {
        return Long.compare(id, o.id);
    }
}
