import React from 'react';
import { useForm, type UseFormReturnType } from 'react-form-simple';
import { getUuid } from 'react-form-simple/utils/util';

const Row = ({
  form,
  index,
}: {
  index: number;
  form: UseFormReturnType<any>;
}) => {
  const { render, model, forceUpdate, useSubscribe } = form;
  const subscribeRow = useSubscribe(({ model }) => model.fieldsDymic[index]);

  const { unit, rate } = subscribeRow || {};
  const amount = Number(unit || 0) * Number(rate || 0);

  const renderUnit = render(`fieldsDymic.${index}.unit`, {
    label: `unit${index}`,
  })(<input type="number" />);

  const renderRate = render(`fieldsDymic.${index}.rate`, {
    label: `rate${index}`,
  })(<input type="number" />);
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}
    >
      {renderUnit}
      {renderRate}
      <span>amount: {amount}</span>
      <button
        onClick={() => {
          model.fieldsDymic.splice(index, 1);
          forceUpdate();
        }}
      >
        delete
      </button>
    </div>
  );
};

export default function App() {
  const form = useForm({
    fieldsDymic: [{ uid: getUuid(), unit: 1, rate: 1, amount: 1 }],
  });
  const { model, forceUpdate } = form;
  const renderFields = model.fieldsDymic.map((field, i) => (
    <Row index={i} form={form} key={field.uid} />
  ));
  return (
    <>
      {renderFields}
      <button
        onClick={() => {
          model.fieldsDymic.push({
            unit: 1,
            uid: getUuid(),
            rate: 1,
            amount: 1,
          });
          forceUpdate();
        }}
      >
        add
      </button>
    </>
  );
}
