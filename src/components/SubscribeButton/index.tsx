import css from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={css.subscribeButton}>
      Subscribe now
    </button>
  );
}
