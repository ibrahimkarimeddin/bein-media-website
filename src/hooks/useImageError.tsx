import { ErrorImage } from '@/components/utils/Image';
import React from 'react'

const useImageError = ({currentTarget}:any) => {
    currentTarget.onerror = null;
    currentTarget.src=`${ErrorImage}`;
}

export default useImageError