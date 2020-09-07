package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardSetFilter;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import org.springframework.stereotype.Component;

public abstract class EachPlayerSquareRoundRule extends EachPlayerRoundRule {

    public EachPlayerSquareRoundRule(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    protected void runPlayer(Player player, CardSetFilter<Card> allCards) {
        for (var square = 1; square <= 5; square++)
            runPlayerSquare(player, square, allCards);
    }

    protected abstract void runPlayerSquare(Player player, int square, CardSetFilter<Card> allCards);


}
