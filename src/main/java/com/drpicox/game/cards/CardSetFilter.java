package com.drpicox.game.cards;

import com.drpicox.game.players.Player;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CardSetFilter<T extends ICard> implements Iterable<T> {

    private Set<T> cards;

    public CardSetFilter(Collection<T> cards) {
        this(new LinkedHashSet<>(cards));
    }
    public CardSetFilter(Set<T> cards) {
        this.cards = cards;
    }

    @Override
    public Iterator<T> iterator() {
        return cards.iterator();
    }
    public Stream<T> stream() {
        return cards.stream();
    }
    public CardSetFilter<T> filter(Predicate<T> predicate) {
        return new CardSetFilter(
                cards.stream().filter(predicate).collect(Collectors.toSet())
        );
    }
    public int count() {
        return cards.size();
    }
    public boolean isEmpty() {
        return cards.isEmpty();
    }
    public CardSetFilter<T> limit(int count) {
        var i = new AtomicInteger();
        return filter(c -> i.getAndIncrement() < count);
    }

    public CardSetFilter<T> ofType(String type) {
        return filter(c -> c.getType().equals(type));
    }
    public CardSetFilter<T> ofSameName(Card card) {
        return ofName(card.getName());
    }
    public CardSetFilter<T> ofName(String name) {
        return filter(c -> c.getName().equals(name));
    }

    public CardSetFilter<T> ofOwner(Player owner) {
        return ofOwner(owner.getName());
    }
    public CardSetFilter<T> ofOwner(String ownerName) {
        return filter(c -> c.getOwnerName().equals(ownerName));
    }
    public CardSetFilter<T> ofOtherOwnerThan(Player owner) {
        return ofOtherOwnerThan(owner.getName());
    }
    public CardSetFilter<T> ofOtherOwnerThan(String ownerName) {
        return filter(c -> !c.getOwnerName().equals(ownerName));
    }

    public CardSetFilter<T> atHand() {
        return filter(Positions::atHand);
    }
    public CardSetFilter<T> atAnySquare() {
        return filter(Positions::atAnySquare);
    }
    public CardSetFilter<T> atSquare(int square) {
        return filter(c -> Positions.atSquare(c, square));
    }

    public CardSetFilter<T> atAnyPile() {
        return filter(Positions::atAnyPile);
    }
    public CardSetFilter<T> atPile(String pile) {
        return filter(c -> Positions.atPile(c, pile));
    }
    public CardSetFilter<T> atPile(Player target, int square) {
        return atPile(target.getName(), square);
    }
    public CardSetFilter<T> atPile(String targetName, int square) {
        return atPile(targetName + "-square-" + square);
    }

    public List<String> asStrings(String format) {
        return cards.stream().map(c -> asString(c, format)).collect(Collectors.toList());
    }

    private String asString(ICard c, String format) {
        return format
                .replaceAll("T", c.getType())
                .replaceAll("N", c.getName());
    }

    @Override
    public String toString() {
        return "{\n- " +
                cards.stream().map(c -> c.toString()).collect(Collectors.joining("\n- ")) +
                '}';
    }
}
