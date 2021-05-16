# Ref: https://github.com/microsoft/vscode-remote-try-python/blob/master/.devcontainer/Dockerfile
#      https://github.com/aws/aws-cli/blob/v2/docker/Dockerfile
FROM amazon/aws-cli

ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Install packages
RUN yum update -y && yum install -y git tar ca-certificates util-linux-user procps bind-utils jq zsh sudo gcc-c++ make

# Install nodejs
RUN curl -sL https://rpm.nodesource.com/setup_lts.x | bash -
RUN yum install -y -q nodejs
RUN curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
RUN yum -y install yarn

# Inistall python
RUN yum install -y python3
RUN ln -nfs /usr/bin/python3 /usr/bin/python

# Fix with migrating Python
ADD ./python-migration/yum /usr/bin/yum
RUN chmod 755 /usr/bin/yum
ADD ./python-migration/urlgrabber-ext-down /usr/libexec/urlgrabber-ext-down
RUN chmod 755 /usr/libexec/urlgrabber-ext-down

# Install libraries for Puppeteer
RUN sudo yum install -y pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc

# Install serverless
RUN npm install -g serverless

# Install AWS CDK
RUN npm install -g aws-cdk

# Create non-root user
RUN groupadd --gid $USER_GID $USERNAME &&\
    useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME &&\
    mkdir -p /etc/sudoers.d &&\
    echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME &&\
    chmod 0440 /etc/sudoers.d/$USERNAME

# Switch shell to zsh
RUN chsh -s /bin/zsh developer
