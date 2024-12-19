<div data-v-6b868a30="" class="footer">
                <ul class="tw-w-full tw-h-full tw-flex tw-justify-around" data-v-6b868a30="">
                    <li class="tw-flex-1 tw-flex tw-flex-col tw-items-center tw-justify-center actived" onclick="window.location.href='{{ route('user.dashboard')}}'"><svg
                            data-v-3f1a7394="" aria-hidden="true" class="tw-mb-2px svg-icon"
                            style="color: rgb(174, 184, 196); width: 0.5176rem; height: 0.5176rem; font-size: 0.5176rem;">
                            <use data-v-3f1a7394="" xlink:href="#svg-icon-home"></use>
                        </svg><span class="tw-text-12px tw-text-secondry"> Home</span></li>
                    <li class="tw-flex-1 tw-flex tw-flex-col tw-items-center tw-justify-center" onclick="window.location.href='{{ route('user.grid')}}'"><svg data-v-3f1a7394=""
                            aria-hidden="true" class="tw-mb-2px svg-icon"
                            style="color: rgb(174, 184, 196); width: 0.5176rem; height: 0.5176rem; font-size: 0.5176rem;">
                            <use data-v-3f1a7394="" xlink:href="#svg-icon-robot"></use>
                        </svg><span class="tw-text-12px tw-text-secondary"> SEOKORE</span></li>
                    <li class="tw-flex-1 tw-flex tw-flex-col tw-items-center tw-justify-center" onclick="window.location.href='{{ route('user.team')}}'"><svg data-v-3f1a7394=""
                            aria-hidden="true" class="tw-mb-2px svg-icon"
                            style="color: rgb(174, 184, 196); width: 0.5176rem; height: 0.5176rem; font-size: 0.5176rem;">
                            <use data-v-3f1a7394="" xlink:href="#svg-icon-team"></use>
                        </svg><span class="tw-text-12px tw-text-secondary"> Team</span></li>
                    <li class="tw-flex-1 tw-flex tw-flex-col tw-items-center tw-justify-center" onclick="window.location.href='{{ route('user.wallet')}}'"><svg data-v-3f1a7394=""
                            aria-hidden="true" class="tw-mb-2px svg-icon"
                            style="color: rgb(174, 184, 196); width: 0.5176rem; height: 0.5176rem; font-size: 0.5176rem;">
                            <use data-v-3f1a7394="" xlink:href="#svg-icon-assets"></use>
                        </svg><span class="tw-text-12px tw-text-secondary"> Assets</span></li>
                        <li class="tw-flex-1 tw-flex tw-flex-col tw-items-center tw-justify-center" onclick="window.location.href='{{ route('user.Mine')}}'"><svg data-v-3f1a7394=""
                            aria-hidden="true" class="tw-mb-2px svg-icon"
                            style="color: rgb(174, 184, 196); width: 0.5176rem; height: 0.5176rem; font-size: 0.5176rem;">
                            <use data-v-3f1a7394="" xlink:href="#svg-icon-team"></use>
                        </svg><span class="tw-text-12px tw-text-secondary">Mine</span></li>
                </ul>
            </div>
        </div>
        <div class="van-overlay" style="display: none;">
            <div class="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
                <div
                    class="tw-w-100px tw-h-100px tw-flex tw-justify-center tw-items-center tw-bg-dark tw-bg-opacity-10 tw-rounded-10px">
                    <div class="van-loading van-loading--circular"><span
                            class="van-loading__spinner van-loading__spinner--circular"
                            style="color: rgb(23, 114, 248); width: 1rem; height: 1rem;"><svg viewBox="25 25 50 50"
                                class="van-loading__circular">
                                <circle cx="50" cy="50" r="20" fill="none"></circle>
                            </svg></span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="van-toast van-toast--middle van-toast--success" style="z-index: 2001; display: none;"><i
            class="van-icon van-icon-success van-toast__icon">
            <!----></i>
        <div class="van-toast__text">Login successful</div>
    </div>
    <!---->
</body>

</html>