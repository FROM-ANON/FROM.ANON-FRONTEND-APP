// Mail.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Column, Row } from 'components/common/Div';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import trashbin from 'assets/icons/trashbin-colored.svg';
import { Toast } from 'components/common/Toast';
import { Confirm } from 'components/common/modal/Confirm';
import { Img } from 'components/common/Img';
import { mailType } from 'types';
import { useNavigation } from '@react-navigation/native';

export const Mail = ({ mail }: { mail: mailType | undefined }) => {
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleDelete = () => {
    setIsModalOpen(true);
  };
  const [isConfirmedToDelete, setIsConfirmedToDelete] = useState<boolean>(false);

  useEffect(() => {
    if (isConfirmedToDelete) {
      navigation.navigate('Inbox'); // React Navigation을 사용하여 페이지 이동
    }
  }, [isConfirmedToDelete]);

  return (
    <Container>
      {mail !== undefined && (
        <>
          <ContentText>
            <Text style={{ textDecorationLine: 'underline' }}>{mail.text}</Text>
          </ContentText>
          <Row justifyContent="space-between" alignItems="center">
            <Typo.s4 color={Palette.Mandarin}>{mail.createdTime}</Typo.s4>
            <TouchableOpacity onPress={handleDelete}>
              <Img src={trashbin} width={14} height={13.96} alt="delete button" />
            </TouchableOpacity>
          </Row>
          {isModalOpen && (
            <Confirm
              text="편지를 삭제하시겠습니까?"
              type="delete"
              setIsModalOpenState={setIsModalOpen}
              setIsConfirmedToAction={setIsConfirmedToDelete}
              mailId={mail.mailId}
            />
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled(Column)`
  width: 300px;
  min-height: 300px;
  align-items: flex-start;
  justify-content: space-between;
  margin: 5px auto;
  padding: 25px;
  gap: 30px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.5);
`;

const ContentText = styled(Typo.b4)`
  line-height: 200%;
`;
