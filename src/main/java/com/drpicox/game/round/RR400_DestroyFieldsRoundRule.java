package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import org.springframework.stereotype.Component;

@Component
public class RR400_DestroyFieldsRoundRule extends EachPlayerSquareRoundRule {

    public RR400_DestroyFieldsRoundRule(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        allCards.ofOwner(player).atSquare(square).stream().findAny().ifPresent(field -> {
            allCards.atPile(player, square).ofType("knight").stream().findAny().ifPresent(x ->
                cardController.discardCard(field)
            );
        });
    }
}
