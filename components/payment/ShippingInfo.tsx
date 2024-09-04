import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useMutation } from '@tanstack/react-query';
import Input from '../../lib/common/Input';
import Button from '../../lib/common/Button';
import { postAddress } from '../../api/user/addressApi';
import { PurchaseAddress, DaumPostcodeAddress, ShippingInfoProp } from '../../lib/types/purchase';
import useAuthStore from '../../lib/store/useAuthStore';
import useOrdererInfo from '../../lib/hooks/useOrdererInfo';

export default function ShippingInfo({ onAddressChange }: ShippingInfoProp) {
  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [isPostcodeOpen, setIsPostcodeOpen] = useState<boolean>(false);
  const [daumAddress, setDaumAddress] = useState({
    address: '',
    addressEnglish: '',
    bname: '',
    jibunAddress: '',
    jibunAddressEnglish: '',
    roadAddress: '',
    sido: '',
    sigungu: '',
    query: '',
  });
  const useToken = useAuthStore((state) => state.userToken);

  const mutation = useMutation({
    mutationKey: ['postAddress'],
    mutationFn: (addressData: PurchaseAddress) => postAddress(addressData, useToken),
    onSuccess: () => {
      alert('주소 등록 성공');
    },
    onError: (error: Error) => {
      alert('주소 등록 실패');
      console.error('주소 등록 실패', error);
    },
  });

  const { data, isLoading, error } = useOrdererInfo();

  /**
   * 우편번호 찾기 버튼 클릭시 실행되는 카카오 우편번호 API
   * @param data
   */
  const handleComplete = (data: DaumPostcodeAddress) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
    setDaumAddress({
      address: data.address,
      addressEnglish: data.addressEnglish,
      bname: data.bname,
      jibunAddress: data.jibunAddress,
      jibunAddressEnglish: data.jibunAddressEnglish,
      roadAddress: data.roadAddress,
      sido: data.sido,
      sigungu: data.sigungu,
      query: data.query,
    });
    setIsPostcodeOpen(false);
    onAddressChange(`${fullAddress} ${detailAddress}`);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(event.target.value);
    onAddressChange(`${address} ${detailAddress}`);
  };

  const handleRegisterAddress = () => {
    if (address === '' || detailAddress === '') {
      alert('주소를 입력해주세요');
      return;
    }

    const addressData: PurchaseAddress = {
      address: daumAddress.address,
      addressEnglish: daumAddress.addressEnglish,
      bname: daumAddress.bname,
      jibunAddress: daumAddress.jibunAddress,
      jibunAddressEnglish: daumAddress.jibunAddressEnglish,
      roadAddress: daumAddress.roadAddress,
      sido: daumAddress.sido,
      sigungu: daumAddress.sigungu,
      detail: detailAddress,
      postalCode: daumAddress.query,
      country: 'KR',
      isDefault: true,
    };
    mutation.mutate(addressData);
  };

  if (isLoading) {
    return <p>배송 정보를 불러오는 중입니다.</p>;
  }
  if (!data) {
    return <p>배송 정보가 없습니다.</p>;
  }
  if (error) {
    return <p>배송 정보를 불러오는데 실패했습니다.</p>;
  }

  return (
    <section className="border p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">배송 정보</h2>
      {data?.address?.address ? (
        <>
          <div className="text-lg">
            <p>{data.name}</p>
            <p>{data.phoneNumber}</p>
            <p>{data.address.address}</p>
            <p>{data.address.detail}</p>
            <p>{data.address.postalCode}</p>
          </div>
        </>
      ) : (
        <div>
          <div className="flex items-center gap-3">
            <Input
              type="text"
              label="우편번호"
              value={address}
              name="address"
              placeholder="우편번호"
              width="10/12"
              fontSize="base"
              disabled={true}
              className="focus:outline-none focus:border-primary"
            />
            <Button
              type="button"
              label="우편번호 찾기"
              onClick={() => setIsPostcodeOpen(true)}
              width="auto"
              fontSize="base"
              className="bg-gray-400 hover:bg-gray-500"
            />
          </div>
          <div className="flex items-center gap-3">
            <Input
              type="text"
              label="상세 주소"
              value={detailAddress}
              onChange={handleOnChange}
              name="detailAddress"
              placeholder="상세 주소를 입력하세요"
              width="10/12"
              fontSize="base"
              className="focus:outline-none focus:border-primary"
            />
            <Button
              type="button"
              label="배송주소 등록"
              onClick={handleRegisterAddress}
              width="auto"
              fontSize="base"
              className="bg-primary hover:bg-blue-500"
            />
          </div>
        </div>
      )}
      {isPostcodeOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full">
          <div className="relative top-20 w-1/3 h-3/5 mx-auto p-5 shadow-lg border bg-white">
            <button className="absolute top-2 right-2" onClick={() => setIsPostcodeOpen(false)}>
              닫기
            </button>

            <div className="mt-10">
              <DaumPostcode onComplete={handleComplete} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
