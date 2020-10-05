import React from "react";
import { useDispatch } from "react-redux";
import { css } from "emotion";
import { CardState } from "www/ducks/cards";
import { selectCard } from "www/ducks/selectedCard";

const typeColors = {
  food: "#EF5FA7",
  knight: "#EF5FA7",
  field: "#F8BA00",
  event: "#00A2FF",
} as any;

const typeIcons = {
  food: "🍲",
  knight: "💂",
  field: "🏠",
  event: "⚡",
} as any;

const nameIcons = {
  f1: "🍲",
  k1: "💂",
  field: "🏠",
  event: "⚡",
  forest: "🌲",
  grain: "🌾",
  sheep: "🐑",
} as any;

const cardClassName = css`
  background: red;
  height: 6rem;
  width: 4.5rem;
  border-radius: 10%;
  margin-right: -3rem;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: solid black 1px;

  &:hover {
    z-index: 1000;
  }

  .type {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }

  .name {
    font-size: 4rem;
  }
`;

export function Card({ card }: { card: CardState }) {
  const dispatch = useDispatch();
  const select = () => dispatch(selectCard(card));

  return (
    <div
      className={cardClassName}
      data-testid={`card-${card.type}`}
      data-name={card.name}
      onClick={select}
      style={{ background: typeColors[card.type] }}
    >
      <div className="type">{typeIcons[card.type]}</div>
      <div className="name">{nameIcons[card.name]}</div>
    </div>
  );
}
