package com.drpicox.game.forms;

import com.drpicox.game.cards.CardController;
import com.drpicox.game.games.Game;
import com.drpicox.game.games.GameController;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.ScenarioController;
import org.springframework.stereotype.Controller;

@Controller
public class PlayGameBuilder {

    private final CardController cardController;
    private final PlayerController playerController;
    private final GameController gameController;
    private final ScenarioController scenarioController;

    public PlayGameBuilder(CardController cardController, PlayerController playerController, GameController gameController, ScenarioController scenarioController) {
        this.cardController = cardController;
        this.playerController = playerController;
        this.gameController = gameController;
        this.scenarioController = scenarioController;
    }

    public void replace(Game game, String playerName, PlayGameForm playGameForm) {
        for (var play: playGameForm.getCards())
            pileCard(play);
    }

    private void pileCard(PlayCardForm play) {
        cardController.pileCard(play.getId(), play.getPile());
    }
}
