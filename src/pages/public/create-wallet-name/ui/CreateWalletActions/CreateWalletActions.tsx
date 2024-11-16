import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';
import { MouseDownEvent } from 'emoji-picker-react/dist/config/config';
import { useFormContext, useWatch } from 'react-hook-form';

import { WalletNameFormState } from '../../model';

import style from './index.module.scss';

import { Button, Input } from '@/shared/ui';
export const CreateWalletActions = () => {
  const { register } = useFormContext<WalletNameFormState>();
  const walletName = useWatch<WalletNameFormState>({ name: 'walletName' });
  const navigate = useNavigate();

  const [selectedEmoji, setSelectedEmoji] = useState<Nullable<EmojiClickData>>(null);

  const handleCreate = () => {
    if (walletName) {
      localStorage.setItem('isAuth', 'true');
      navigate('/');
    }
  };

  const handleEmojiClick: MouseDownEvent = emoji => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className={style.actions}>
      <div className={style.input}>
        <Input
          name="walletName"
          register={register('walletName')}
          title="Wallet name"
          borderRadius={16}
          bg="gray"
          height={64}
          type="text"
        />

        <div className={style.selectedEmoji}>
          <img
            src={
              selectedEmoji
                ? selectedEmoji.imageUrl
                : 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f467.png'
            }
          />
        </div>
      </div>

      <EmojiPicker
        onEmojiClick={handleEmojiClick}
        width="100%"
        height="280px"
        theme={Theme.DARK}
        className={style.emojies}
        emojiStyle={EmojiStyle.NATIVE}
        style={{ backgroundColor: 'transparent' }}
        allowExpandReactions={false}
        searchDisabled
      />

      <Button
        type="button"
        bg="blue"
        width="full"
        height={56}
        borderRadius={16}
        mt={30}
        disabled={!walletName}
        onClick={handleCreate}
      >
        Save
      </Button>
    </div>
  );
};
