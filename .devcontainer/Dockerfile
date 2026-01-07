FROM klakegg/hugo:ext-debian
ARG USERNAME=dev
ARG BASH_HIST_PATH=/bashhistory

RUN rm -f /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
    bash-completion \
    bsdmainutils \
    curl \
    dnsutils \
    iproute2 \
    iputils-ping \
    ssh-client \
    unzip \
    vim \
    wget

RUN groupadd -g 1000 -r $USERNAME && \
    useradd -u 1000 -b /home -r -g $USERNAME -m -s $(which bash) $USERNAME

# Create working directory. Ownership will be changed in entrypoint.sh which
# executes *after* the volume has been mounted.
RUN mkdir /app

# Persist bash history between runs
# You can also use a mount to persist your command history across sessions / container rebuilds
RUN mkdir ${BASH_HIST_PATH} \
    && touch ${BASH_HIST_PATH}/.bash_history \
    && chown -R $USERNAME ${BASH_HIST_PATH}

# Copy entrypoint script into container, make it executable, then execute it:
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

USER ${USERNAME}

RUN mkdir -p /home/$USERNAME/.vscode-server/extensions \
    /home/$USERNAME/.vscode-server-insiders/extensions \
    /home/$USERNAME/temp

RUN git clone https://github.com/quickstar/pack.git /home/$USERNAME/.vim/pack/; \
    cd /home/$USERNAME/.vim/pack/; \
    git submodule update --init; \
    ./install.sh "/home/${USERNAME}"

RUN echo "export HISTFILE=${BASH_HIST_PATH}/.bash_history" >> /home/${USERNAME}/.bashrc

USER root
